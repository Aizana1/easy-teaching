import React from 'react';
import { Card, Row, Col, Button } from 'antd';

const CardList = ({ cards, setCards }) => {
  const handleDeleteClick = (i) => {
    setCards(prev => (
      prev.filter((el, ind) => ind !== i)
    ));
  }

  return (
    <>
      <Row gutter={16}>
      <ul style={{ display: 'flex', flexDirection: 'row',  flexWrap: 'wrap' }}>
        {cards.map((card, i) => (
          <Col key={i} span={8}>
            <Card title={card.word} style={{ width: 500 }}>
              <Card type="inner" title={card.definition}>
                <p>{card.meaning}</p>
                <p>{card.examples}</p>
              </Card>
              {card.meaning2 && (
                <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title={card.definition2}
                >
                  <p>{card.meaning2}</p>
                  <p>{card.examples2}</p>
                </Card>
              )}
            </Card>
            <Button type="primary" onClick={() => handleDeleteClick(i)}>
              Удалить карточку
            </Button>
          </Col>
        ))}
      </ul>
      </Row>

      {/* <ul>
        {cards.map((card) => (
          <Card
            title={`${card.definition[0]}. ${card.word}`}
            style={{ width: 300 }}
          >
            <p>{card.meaning}</p>
            <Meta title={card.definition} />
            <p>{card.examples}</p>
            {card.meaning2 && (
              <>
                <p>{card.definition2}</p>
                <p>{card.meaning2}</p>
                <p>{card.examples2}</p>
              </>
            )}
          </Card>
        ))}
      </ul>
      <Button htmlType="click" /> */}
    </>
  );
};

export default CardList;
