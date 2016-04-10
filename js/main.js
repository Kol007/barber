( function() {
    "use strict";
    document.addEventListener( "DOMContentLoaded", ready );

    // ID modal-login-form
    function ready() {
        var allModal = document.querySelectorAll( ".modal-content" );
        var modalAuthBtn = document.querySelectorAll( ".main-header a.login" );
        var modalMapBtn = document.querySelectorAll( ".show-modal-map" );

        var modalForm = document.getElementById( "modal-login-form" );
        var form = modalForm.querySelector( "form" );

        var modalMap = document.getElementById( "modal-map" );

        var closeModalButton  = document.querySelectorAll( ".modal-content-close" );
        var hideModalFunc = function( event ) {
            event.preventDefault();
            this.parentNode.classList.add( "hidden" );
            this.parentNode.classList.remove( "modal-bounce" );
        };
        for ( var i = 0; i < closeModalButton.length; i++ ) {
            closeModalButton[ i ].addEventListener( "click", hideModalFunc );
        }

        [].forEach.call( modalAuthBtn, function( item ) {
            item.addEventListener( "click", function( event ) {
                var localStorageLogin = localStorage.getItem( "login" );
                event.preventDefault();
                modalForm.classList.add( "modal-bounce" );
                setTimeout( function () {
                    modalForm.classList.remove( "modal-bounce" );
                }, 700 );
                modalForm.classList.toggle( "hidden" );
                modalForm.querySelector( "[name=login]" ).focus();

                if ( localStorageLogin ) {
                    modalForm.querySelector( "[name=login]" ).value = localStorageLogin;
                    modalForm.querySelector( "[name=password]" ).focus();
                }
            } );
        } );

        [].forEach.call( modalMapBtn, function( item ) {
            item.addEventListener( "click", function( event ) {
                event.preventDefault();
                console.log( modalMap );
                modalMap.classList.toggle( "hidden" );
                modalMap.classList.add( "modal-bounce" );
                setTimeout( function () {
                    modalMap.classList.remove( "modal-bounce" );
                }, 700 );
            } );
        } );

        form.addEventListener( "submit", function( event ) {
            var login = form.querySelector( "[name=login]" );
            var password = form.querySelector( "[name=password]" );


            console.log( login.value, password.value );
            if ( !login.value || !password.value ) {
                event.preventDefault();
                modalForm.classList.add( "shake" );
                setTimeout( function() {
                    modalForm.classList.remove( "shake" );

                }, 600 );
            } else {
                localStorage.setItem( "login", login.value );
            }
        } );

        window.addEventListener( "keydown", function( event ) {
            if ( event.keyCode === 27 ) {
                [].forEach.call( allModal, function( item ) {
                    item.classList.add( "hidden" );
                } );
            }
        } );
    }
} )();
