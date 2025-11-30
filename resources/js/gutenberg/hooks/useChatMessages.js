/**
 * WordPress dependencies
 */
import { useState, useEffect, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Custom hook for managing chat messages
 *
 * @param {number} currentPostId Current post ID
 * @param {boolean} isOpen Whether chat panel is open
 * @returns {Object} Message state and handlers
 */
export function useChatMessages( currentPostId, isOpen ) {
	const [ messages, setMessages ] = useState( [] );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ page, setPage ] = useState( 1 );
	const [ hasMore, setHasMore ] = useState( true );
	const [ isFetchingMore, setIsFetchingMore ] = useState( false );
	const chatContentRef = useRef( null );
	const prevScrollHeightRef = useRef( 0 );

	const scrollToBottom = () => {
		if ( chatContentRef.current ) {
			chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
		}
	};

	const fetchMessages = async ( pageNum = 1 ) => {
		const isFirstPage = pageNum === 1;
		if ( isFirstPage ) {
			setIsLoading( true );
		} else {
			setIsFetchingMore( true );
		}

		try {
			const response = await apiFetch( {
				path: `/directorist-gutenberg/admin/templates/${ currentPostId }/ai-chats?page=${ pageNum }&per_page=10`,
				method: 'GET',
			} );

			if ( response && response.items ) {
				const newMessages = response.items.reverse(); // Oldest first
				setMessages( prev => isFirstPage ? newMessages : [ ...newMessages, ...prev ] );
				setHasMore( pageNum * 10 < response.total );
			}
		} catch ( error ) {
			console.error( 'Error fetching messages:', error );
		} finally {
			if ( isFirstPage ) {
				setIsLoading( false );
				setTimeout( () => scrollToBottom(), 100 );
			} else {
				setIsFetchingMore( false );
				// Restore scroll position
				if ( chatContentRef.current ) {
					const newScrollHeight = chatContentRef.current.scrollHeight;
					const scrollDiff = newScrollHeight - prevScrollHeightRef.current;
					chatContentRef.current.scrollTop = scrollDiff;
				}
			}
		}
	};

	const handleScroll = ( e ) => {
		const scrollElement = chatContentRef.current || e.target;
		if ( scrollElement && scrollElement.scrollTop <= 5 && hasMore && ! isFetchingMore && ! isLoading ) {
			prevScrollHeightRef.current = scrollElement.scrollHeight;
			const nextPage = page + 1;
			setPage( nextPage );
			fetchMessages( nextPage );
		}
	};

	const storeMessage = async ( role, message ) => {
		return await apiFetch( {
			path: `/directorist-gutenberg/admin/templates/${ currentPostId }/ai-chats`,
			method: 'POST',
			data: { role, message }
		} );
	};

	const addMessage = ( message ) => {
		setMessages( prev => [ ...prev, message ] );
	};

	const removeMessage = ( messageId ) => {
		setMessages( prev => prev.filter( m => m.id !== messageId ) );
	};

	// Reset and fetch messages when panel opens
	useEffect( () => {
		if ( isOpen && currentPostId ) {
			setMessages( [] );
			setPage( 1 );
			setHasMore( true );
			fetchMessages( 1 );
		}
	}, [ isOpen, currentPostId ] );

	// Scroll to bottom on new message
	useEffect( () => {
		if ( isOpen && ! isFetchingMore && ! isLoading ) {
			setTimeout( () => scrollToBottom(), 100 );
		}
	}, [ messages, isOpen, isFetchingMore, isLoading ] );

	return {
		messages,
		setMessages,
		addMessage,
		removeMessage,
		isLoading,
		isFetchingMore,
		hasMore,
		chatContentRef,
		handleScroll,
		storeMessage,
		scrollToBottom,
	};
}

