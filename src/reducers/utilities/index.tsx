export function getImages(mediaId: number, media: WP.MediaState): WP.ImageList {
  console.log(mediaId);
  return media[mediaId].media_details.sizes;
}