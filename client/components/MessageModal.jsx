import React from 'react';
import { Message } from './StyledComponents/MessageModal';
import { useSelector, useDispatch } from 'react-redux';

import { clearMessage } from '../redux/globalSlice';
import {
  UilCheckCircle,
  UilExclamationTriangle,
  UilExclamationOctagon,
  UilMultiply,
} from '@iconscout/react-unicons';

const MessageModal = () => {
  let message = useSelector((state) => state.global.message);
  const dispatch = useDispatch();
  return (
    <Message
      warning={message.type === 'warning' && true}
      succeed={message.type === 'succeed' && true}
      error={message.type === 'error' && true}
    >
      {message.type === 'succeed' && <UilCheckCircle />}
      {message.type === 'warning' && <UilExclamationTriangle />}
      {message.type === 'error' && <UilExclamationOctagon />}
      <p>{message.content}</p>
      <UilMultiply onClick={() => dispatch(clearMessage())} />
    </Message>
  );
};

export default MessageModal;
