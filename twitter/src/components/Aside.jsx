import {
  collection,
  count,
  getAggregateFromServer,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const Aside = () => {
  const [data, setData] = useState();

  const tweetsCol = collection(db, 'tweets');

  // döükmanlar ile alakları istatistik hesaplamay yarar
  // 1) kolleksiyonun referansı
  // 2) sum / avarage / count
  useEffect(() => {
    getAggregateFromServer(tweetsCol, {
      tweetsCount: count(),
    }).then((res) => setData(res.data()));
  }, []);

  return (
    <div className="max-lg:hidden p-3">
      <h2 className="text-xl font-bold">Tweets</h2>
      <div>
        <p>Toplam Tweetler: {data?.tweetsCount}</p>
      </div>
    
     
    </div>
  );
};

export default Aside;