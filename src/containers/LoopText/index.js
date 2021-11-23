import React from 'react';
import TapePhrase from '../../components/TapePhrase';
import { TICKER_TAPE_PHRASES } from '../../constants/variables';
import './_styles.css';

function LoopText () {

  return <div className="ticker-wrap">
    <div className="ticker">
      <span className="item-collection">
        {TICKER_TAPE_PHRASES.map((phrase, index) =>
          <TapePhrase key={phrase} index={index} word={phrase} />)}
      </span>

      <span className="item-collection-1">
        {TICKER_TAPE_PHRASES.map((phrase, index) =>
          <TapePhrase key={phrase} index={index} word={phrase} />)}
      </span>
    </div>
  </div>
};

export default LoopText;