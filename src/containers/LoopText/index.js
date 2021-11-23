import React from 'react';
import TapePhrase from '../../components/TapePhrase';
import { TICKER_TAPE_PHRASES } from '../../constants/variables';

function LoopText () {
  return <div className="loop-animation">
    {TICKER_TAPE_PHRASES.map((phrase, index) =>
      <TapePhrase key={phrase} index={index} word={phrase} />)}
  </div>
};

export default LoopText;