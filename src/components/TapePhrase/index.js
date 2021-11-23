import React from 'react';
import cx from 'classnames';
import './_styles.css';

const TapePhrase = ({ index, word }) => {
  return (
    <span className={cx({
      light: index % 2 === 0,
      italic: index % 2 === 1
    })}>{word} &nbsp; </span>
  );
};

export default TapePhrase;