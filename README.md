This React application is a set of implemented functionality written in TypeScript and using
the Material-UI library. CI/CD is carried out through the application of: github.com and
netlify.com


# Posts page:

  The Posts page uses <strong>RTK QUERY</strong> with the ability to add and delete a post.

  Requests work fine, only there are responses from <strong>«jsonplaceholder»</strong> that
  are peculiar.

  Also on this page, a filter is implemented by the number of displayed posts and content.

  The <strong>«framer-motion»</strong> library is used to animate the display of posts


# Users page:

  This page uses the classic <strong>Redux toolkit</strong>.

  When you click on the <strong>«more details»</strong> button, a request is made for more
  specific information about the selected user.

The received information is displayed in the right window.

  This page also provides the possibility of manually changing the width of the blocks.
  The&nbsp;
  <strong>«re-resizable»</strong> library is used.


# Comments page:

  The Comments page also uses the classic <strong>Redux toolkit</strong>. Only the display
  of detailed information about the selected comment is made in a new tab.

  New comments are received when the page is <strong>scrolled</strong>.

# Image page:
On the Image page, a lazy loading of an image of a huge size is carried out.
