export function getImages(mediaId: number, media: WP.MediaState): WP.ImageMap {
  console.log(mediaId);
  return media[mediaId].media_details.sizes;
}

/**
 * Utility function which confirms if a specified state group
 * is loaded or not. Not all state has to be included. Just the
 * state which holds necessary data for the page to be displayed.
 * 
 * @export
 * @param {...object[]} stateItems 
 * @returns 
 */
export function stateGroupIsLoading(...stateItems: object[]) {
  let isLoading = false;
  stateItems.forEach(item => {
    if ( !item ) {
      isLoading = true;
    } else if ( Object.keys(item).length === 0 && item.constructor === Object ) {
      isLoading = true;
    }
  });

  return isLoading;
}