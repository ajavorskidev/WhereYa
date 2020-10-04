const initialSettings = {
  nickname: '',
  serverUrl: '',
};

export default function (settings = initialSettings, action) {
  switch (action.type) {
    default:
      return settings;
  }
}
