import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';

type Trend = 'increasing' | 'decreasing' | null;

interface IProps {
  count: number;
}

const Counter: FC<IProps> = ({count}) => {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState<Trend>(null);

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }
  // React.useEffect(() => {
  //   if (prevCount !== count) {
  //     setPrevCount(count);
  //     setTrend(count > prevCount ? 'increasing' : 'decreasing');
  //   }
  // }, [prevCount, count]);

  return (
    <>
      <View>
        <Text>{`Count: ${count}`}</Text>
      </View>
      {trend && <Text>The count is {trend}</Text>}
    </>
  );
};

export default Counter;
