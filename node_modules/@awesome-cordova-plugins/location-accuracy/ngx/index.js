import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var LocationAccuracy = /** @class */ (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    LocationAccuracy.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracy.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracy.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracy.pluginName = "LocationAccuracy";
    LocationAccuracy.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracy.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracy.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracy.platforms = ["Android", "iOS"];
    LocationAccuracy.decorators = [
        { type: Injectable }
    ];
    return LocationAccuracy;
}(AwesomeCordovaNativePlugin));
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYXRpb24tYWNjdXJhY3kvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBb0N0RCxvQ0FBMEI7OztRQUM5RDs7OztXQUlHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNILDhDQUF3QyxHQUFHLENBQUMsQ0FBQztRQUM3Qzs7OztXQUlHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNILHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qjs7OztXQUlHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7Ozs7V0FJRztRQUNILDBCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qjs7OztXQUlHO1FBQ0gsNEJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCOzs7O1dBSUc7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7OztXQUlHO1FBQ0gsa0NBQTRCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDOzs7O1dBSUc7UUFDSCwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekI7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBUXZDLHFDQUFVO0lBVVYsdUNBQVk7SUFXWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7O2dCQTVHekIsVUFBVTs7MkJBcENYO0VBcUNzQywwQkFBMEI7U0FBbkQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBMb2NhdGlvbiBBY2N1cmFjeVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIENvcmRvdmEvUGhvbmVnYXAgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1MgdG8gcmVxdWVzdCBlbmFibGluZy9jaGFuZ2luZyBvZiBMb2NhdGlvbiBTZXJ2aWNlcyBieSB0cmlnZ2VyaW5nIGEgbmF0aXZlIGRpYWxvZyBmcm9tIHdpdGhpbiB0aGUgYXBwLCBhdm9pZGluZyB0aGUgbmVlZCBmb3IgdGhlIHVzZXIgdG8gbGVhdmUgeW91ciBhcHAgdG8gY2hhbmdlIGxvY2F0aW9uIHNldHRpbmdzIG1hbnVhbGx5LlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhdGlvbkFjY3VyYWN5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbkFjY3VyYWN5OiBMb2NhdGlvbkFjY3VyYWN5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmxvY2F0aW9uQWNjdXJhY3kuY2FuUmVxdWVzdCgpLnRoZW4oKGNhblJlcXVlc3Q6IGJvb2xlYW4pID0+IHtcbiAqXG4gKiAgIGlmKGNhblJlcXVlc3QpIHtcbiAqICAgICAvLyB0aGUgYWNjdXJhY3kgb3B0aW9uIHdpbGwgYmUgaWdub3JlZCBieSBpT1NcbiAqICAgICB0aGlzLmxvY2F0aW9uQWNjdXJhY3kucmVxdWVzdCh0aGlzLmxvY2F0aW9uQWNjdXJhY3kuUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZKS50aGVuKFxuICogICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JlcXVlc3Qgc3VjY2Vzc2Z1bCcpLFxuICogICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlcXVlc3RpbmcgbG9jYXRpb24gcGVybWlzc2lvbnMnLCBlcnJvcilcbiAqICAgICApO1xuICogICB9XG4gKlxuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYXRpb25BY2N1cmFjeScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubG9jYXRpb25BY2N1cmFjeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb25BY2N1cmFjeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX05PX1BPV0VSID0gMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX0xPV19QT1dFUiA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9CQUxBTkNFRF9QT1dFUl9BQ0NVUkFDWSA9IDI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZID0gMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBTVUNDRVNTX1NFVFRJTkdTX1NBVElTRklFRCA9IDA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgU1VDQ0VTU19VU0VSX0FHUkVFRCA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfQUxSRUFEWV9SRVFVRVNUSU5HID0gLTE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfSU5WQUxJRF9BQ1RJT04gPSAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0lOVkFMSURfQUNDVVJBQ1kgPSAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0VYQ0VQVElPTiA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfQ0FOTk9UX0NIQU5HRV9BQ0NVUkFDWSA9IDM7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfVVNFUl9ESVNBR1JFRUQgPSA0O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0dPT0dMRV9BUElfQ09OTkVDVElPTl9GQUlMRUQgPSA0O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc292bGVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHlvdSBjYW4gcmVxdWVzdCBhY2N1cmF0ZSBsb2NhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5SZXF1ZXN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzc1xuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUmVxdWVzdGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgYWNjdXJhdGUgbG9jYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGFjY3VyYWN5IHtudW1iZXJ9IEFjY3VyYWN5LCBmcm9tIDAgdG8gNC4gWW91IGNhbiB1c2UgdGhlIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MgdGhhdCBzdGFydCB3aXRoIFJFUVVFU1RfUFJJT1JJVFlfXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBpZiBhbiBlcnJvciBvY2N1cnJlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdChhY2N1cmFjeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==