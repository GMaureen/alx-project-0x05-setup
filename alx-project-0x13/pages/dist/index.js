"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ImageCard_1 = require("@/components/common/ImageCard");
var useFetchData_1 = require("@/hooks/useFetchData");
var Home = function () {
    var _a = react_1.useState(""), prompt = _a[0], setPrompt = _a[1];
    var _b = react_1.useState(""), imageUrl = _b[0], setImageUrl = _b[1];
    var _c = useFetchData_1["default"](), isLoading = _c.isLoading, responseData = _c.responseData, generatedImages = _c.generatedImages, fetchData = _c.fetchData;
    var handleGenerateImage = function () {
        fetchData("/api/generate-image", { prompt: prompt });
    };
    react_1.useEffect(function () {
        if (!isLoading) {
            setImageUrl(responseData === null || responseData === void 0 ? void 0 : responseData.message);
        }
    }, [isLoading, responseData]);
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center min-h-screen bg-gray-100 p-4" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center" },
            react_1["default"].createElement("h1", { className: "text-4xl font-bold mb-2" }, "Image Generation App"),
            react_1["default"].createElement("p", { className: "text-lg text-gray-700 mb-4" }, "Generate stunning images based on your prompts!"),
            react_1["default"].createElement("div", { className: "w-full max-w-md" },
                react_1["default"].createElement("input", { type: "text", value: prompt, onChange: function (e) { return setPrompt(e.target.value); }, placeholder: "Enter your prompt here...", className: "w-full p-3 border border-gray-300 rounded-lg mb-4" }),
                react_1["default"].createElement("button", { onClick: handleGenerateImage, className: "w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200" }, isLoading ? "Loading..." : "Generate Image")),
            (responseData === null || responseData === void 0 ? void 0 : responseData.message) && (react_1["default"].createElement(ImageCard_1["default"], { action: function () { return setImageUrl(imageUrl); }, imageUrl: imageUrl, prompt: prompt }))),
        generatedImages.length ? (react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("h3", { className: "text-xsl text-center mb-4" }, "Generated Images"),
            react_1["default"].createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border max-w-full md:max-w-[1100px] p-2 overflow-y-scroll h-96" }, generatedImages.map(function (_a, index) {
                var imageUrl = _a.imageUrl, prompt = _a.prompt;
                return (react_1["default"].createElement(ImageCard_1["default"], { action: function () { return setImageUrl(imageUrl); }, imageUrl: imageUrl, prompt: prompt, key: index, width: "w-full", height: "h-40" }));
            })))) : null));
};
exports["default"] = Home;
