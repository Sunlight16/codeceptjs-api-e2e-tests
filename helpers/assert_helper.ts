const assert = require('assert');
const _ = require('lodash');

/*
 * Encapsulate all assert code here instead of polluting the general codebase with
 * 3rd part libraries etc.
 */
class AssertHelper extends Helper {

    /**
     * Validates status codes against provided list and prints the response as part of the failed message
     * 
     * @param {*} responseData - requires value response.data 
     * @param {*} responseStatus - status value
     * @param {*} expectedCodes  - array of valid status codes
     * @param {string} contextMessage - with error message
     */
    assertExpectedResponseCode(responseData: any, responseStatus: number, expectedCodes: any, contextMessage = "") {
        if (!_.includes(expectedCodes, responseStatus)) {

            const response_message = JSON.stringify(responseData);

            let errorMessage = `\n${contextMessage}\n Status code [${responseStatus}] is not in list of allowed codes [${expectedCodes}] Response Message:\n${response_message}`;
            this.failed(errorMessage);
        }
    }

    /*
     * Should fail when any value or collection is empty include a empty string
     * as well as a blank string with empty spaces
     */
    assertNotEmpty(value: any, message: string = '') {
        if (_.isEmpty(value)) {
            this.failed(message);
        }

        if (_.isString(value)) {
            if (_.isEmpty(_.trim(value))) {
                this.failed(message);
            }
        }
    }

    /*
     * Should fail when any value or collection is not empty or only whitespace
     */
    assertEmpty(value: any, message: string = '') {
        if (!_.isEmpty(value)) {
            this.failed(message);
        }

        if (_.isString(value)) {
            if (!_.isEmpty(_.trim(value))) {
                this.failed(message);
            }
        }
    }

    /**
     * Performs deep equality check between expected and actual values.
     */
    assertEqual(actualValue: any, expectedValue: any, step_message: string = '') {
        if (!_.isEqual(actualValue, expectedValue)) {
            let error_message = `Actual value did not match expected value\nExpected: ${JSON.stringify(expectedValue)}\nActual: ${JSON.stringify(actualValue)}`;

            if (!_.isEmpty(_.trim(step_message))) {
                error_message = `${step_message}:\n ${error_message}`;
            }

            this.failed(error_message);
        }
    }

    /**
     *
     *  const testPayload = {
     *   test: 'value',
     *    test1: {
     *       key0: 'value0',
     *       key1: 'value1',
     *       key2: ['asdf', {key0: 0}],
     *   },
     *   test2: {key: 'value'},
     * };
     *
     *
     * const data1 = { test: 'value' };
     * const data2 = { test1: {key0: 'value0'} };
     * const data3 = { test1: {key1: 'value1'} };
     * const data4 = { test1: {key2: ['asdf']} };
     * const data5 = { test1: {key1: 'value1', key2: [{key0: 0}]} };
     * const data6 = { key0: 0 }; //will fail
     *
     * @param payload
     * @param expectedData
     * @param step_message
     */
    seeJsonContains(payload: any, expectedData: any, step_message: string = '') {
        let error_message = '';
        if (!_.isArray(payload)) {
            payload = [payload];
        }
        const dataExists = _.some(payload, expectedData);
        if (!dataExists) {
            error_message = "The expected object signature was not found:\nActual: " + JSON.stringify(payload, null, 2) + "\nExpected: " + JSON.stringify(expectedData, null, 2);

            if (!_.isEmpty(_.trim(step_message))) {
                error_message = `${step_message}:\n ${error_message}`;
            }

            this.failed(error_message);
        }
    }

    /**
     *
     *  const testPayload = {
     *   test: 'value',
     *    test1: {
     *       key0: 'value0',
     *       key1: 'value1',
     *       key2: ['asdf', {key0: 0}],
     *   },
     *   test2: {key: 'value'},
     * };
     *
     *
     * const data1 = { test: 'value' };
     * const data2 = { test1: {key0: 'value0'} };
     * const data3 = { test1: {key1: 'value1'} };
     * const data4 = { test1: {key2: ['asdf']} };
     * const data5 = { test1: {key1: 'value1', key2: [{key0: 0}]} };
     * const data6 = { key0: 0 }; //will fail
     *
     * @param payload
     * @param unexpectedData
     * @param step_message
     */
    dontSeeJsonContains(payload: any, unexpectedData: any, step_message: string) {
        let error_message = '';
        if (!_.isArray(payload)) {
            payload = [payload];
        }
        const dataExists = _.some(payload, unexpectedData);
        if (dataExists) {
            error_message = "The unexpected object signature was found:\nActual: " + JSON.stringify(payload, null, 2) + "\nUnexpected: " + JSON.stringify(unexpectedData, null, 2);

            if (!_.isEmpty(_.trim(step_message))) {
                error_message = `${step_message}:\n ${error_message}`;
            }

            this.failed(error_message);
        }
    }

    failed(message: string) {
        assert.fail(message);
    }
}

export = AssertHelper;
