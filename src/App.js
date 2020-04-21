import React from 'react';
import Tabs from './components/Tabs'

function App() {
  return (
    <div className="App">
     		<Tabs>
     			<tab name="新款">
     				<div>
     					<p>最新款</p>
     					<p>价格最高</p>
     				</div>
     			</tab>
     			<tab name="旧款">
     				<div>
     					<p>旧款设计</p>
     					<p>价格相对优惠</p>
     				</div>
     			</tab>
     			<tab name="二手">
     				<div>
     					<p>翻新二手</p>
     					<p>价格最便宜</p>
     				</div>
     			</tab>
     		</Tabs>
    </div>
  );
}

export default App;
