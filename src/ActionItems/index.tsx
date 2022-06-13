import React from 'react';

type TestDataType = Record<'testId' |'mockName', string>
    

interface IProps {
    testData?: TestDataType
}

const ActionItems: React.FC<IProps> = ({testData}) => {
  return (
    <div>
      <h1
          data-testid={testData?.testId || 'article-name'}
        >
          {testData?.mockName || 'ActionItems'}
        </h1>
    </div>
  );
}

export default ActionItems;
