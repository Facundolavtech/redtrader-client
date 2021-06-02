const getChatMessages = (educatorId, name, short_id, message) => {
  let msgsInSessionStorage = sessionStorage.getItem(educatorId);

  if (!msgsInSessionStorage) {
    let msgsToSessionStorage = [];

    msgsToSessionStorage.push({ name, id: short_id, msg: message });

    const stringifyMsgs = JSON.stringify(msgsToSessionStorage);

    sessionStorage.setItem(educatorId, stringifyMsgs);
  } else {
    let msgsToSessionStorage = JSON.parse(msgsInSessionStorage);

    msgsToSessionStorage.push({ name, id: short_id, msg: message });

    const stringifyMsgs = JSON.stringify(msgsToSessionStorage);

    sessionStorage.setItem(educatorId, stringifyMsgs);
  }
};

export default getChatMessages;
