export const GO_TO_NEXT_PAGE = 'GO_TO_NEXT_PAGE';

const goToNextPage = () => ({
  type: GO_TO_NEXT_PAGE,
  timestamp: Date.now()
});

export default goToNextPage;
