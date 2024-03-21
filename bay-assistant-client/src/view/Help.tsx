// const Help: React.FC = () => {
//     return (
//         <div>
//             <h1>Help</h1>
            
//         </div>
//     )
// };
  
// export default Help;
import React from 'react';
import { List, Card, Button } from 'antd';
 
const data = Array.from({ length: 10 }, (_, i) => ({
  title: `Item ${i}`,
  actions: [<Button key={i}>Action</Button>],
}));
 
const ListGridExample = () => (
  <List
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title} actions={item.actions}/>
          {/* Card content */}
      </List.Item>
    )}
  />
);
 
export default ListGridExample;