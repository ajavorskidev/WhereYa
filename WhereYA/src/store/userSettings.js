const initialSettings = {
  name: 'Alexandro',
  serverUrl: 'http://192.168.1.17:3000',
};

/* Action Types */
const CHANGE_SETTINGS = 'CHANGE_SETTINGS';

/* Action Creators */
export const changeSettings = (updatedSettings) => ({
  type: CHANGE_SETTINGS,
  updatedSettings,
});

export default function (settings = initialSettings, action) {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return action.updatedSettings;
    default:
      return settings;
  }
}
