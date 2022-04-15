//Setup jest-dom matchers as globals
import "@testing-library/jest-dom";

//Setup is react act environment for tests to true
//@ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
