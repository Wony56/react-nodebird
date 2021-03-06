import React, {useMemo} from 'react';
import PropTypes from 'prop-types';   
import { List, Button, Card } from "antd";
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({header, data}) => {
  const style = useMemo(() => ({marginBottom: 20}));
  const loadStyle = useMemo(() => ({textAlign: 'center', margin: '10px 0'}));
  const listItemStyle = useMemo(() => ({marginTop: 20}))

  return (
    <List
      style={style}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={loadStyle}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={listItemStyle}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default FollowList;