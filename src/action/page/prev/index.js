export const GO_TO_PREV_PAGE = 'GO_TO_PREV_PAGE';

const goToPrevPage = () => ({
  type: GO_TO_PREV_PAGE,
  timestamp: Date.now()
});

export default goToPrevPage;
