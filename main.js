$(document).ready(() => {
    $('.menu').on('mouseover', () => {
      $('.nav-menu').show();
    })
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    })
    $('.btn').on('mouseover', event => {
      $(event.target).addClass('btn-hover')
    }).on('mouseleave', event => {
      $(event.target).removeClass('btn-hover')
    })
    $('.postText').on('keyup', event => {
      $('.postText').focus();
      let post = $(event.currentTarget).val();
      let remaining = 140 - post.length;
      if(remaining <= 0) {
        $('.wordcount').addClass('red')
      } else {
        $('.wordcount').removeClass('red')
      }
      $('.characters').html(remaining);
    })
  }); 
  