import React from 'react';
import { connect } from 'react-redux';

import decks from 'src/app/decks';
import goToPrevPage from 'src/action/page/prev';
import goToNextPage from 'src/action/page/next';

import Column from 'src/app/column';
import Row from 'src/app/row';
import DemoForm from 'src/app/form';
import Nav from 'src/app/nav';
import Slide from 'src/app/slide';

const isDemoPage = page => page === 'demo-page';

export const App = ({ onPrevClick, onNextClick, page, pageNum }) => (
  <Row>
    <Column>
      <Nav onClick={onPrevClick} disabled={pageNum === 0}>
        Prev
      </Nav>
    </Column>
    <Column style={{ alignSelf: 'flex-start' }}>
      {isDemoPage(page) && <DemoForm />}
      {!isDemoPage(page) && <Slide {...decks[pageNum]} />}
    </Column>
    <Column>
      <Nav onClick={onNextClick} disabled={pageNum > decks.length - 2}>
        Next
      </Nav>
    </Column>
  </Row>
);

const mapStateToProps = state => ({
  page: decks[state.page],
  pageNum: state.page
});

const mapDispatchToProps = dispatch => ({
  onPrevClick: () => dispatch(goToPrevPage()),
  onNextClick: () => dispatch(goToNextPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
