console.log('Powered by Starter Project (https://starter.silvestar.codes).')

function copyToClipboard (elem) {
  /* Get the text field */
  const $elem = elem
  const copyText = $elem.nextElementSibling

  if (copyText) {
    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand('copy')

    $elem.innerHTML = 'Copied!'

    setTimeout(() => {
      $elem.innerHTML = 'Copy'
    }, 1750)
  }
}

window.copyToClipboard = copyToClipboard
