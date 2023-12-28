/* eslint-disable no-undef */
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  debug: process.meta.env.REACT_APP_ENV !== 'production',
});

const defaultOptions = {
  environment: process.meta.env.REACT_APP_ENV,
};

export const sendViewPageEvent = (eventName, { options } = {}) => {
  mixpanel.track(eventName, {
    type: 'ViewPageEvent',
    ...defaultOptions,
    ...options,
  });
};

export const sendClickEvent = (eventName, { options } = {}) => {
  mixpanel.track(eventName, {
    type: 'ClickEvent',
    ...defaultOptions,
    ...options,
  });
};
