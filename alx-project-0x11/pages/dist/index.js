"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
// ImageCard component inside the same file
var ImageCard = function (_a) {
    var imageUrl = _a.imageUrl, prompt = _a.prompt, action = _a.action;
    return (React.createElement("div", { className: "mt-6 flex flex-col items-center" },
        React.createElement("img", { src: imageUrl, alt: prompt, className: "w-full max-w-md rounded-lg shadow-md" }),
        React.createElement("p", { className: "mt-2 text-gray-700" }, prompt),
        React.createElement("button", { onClick: action, className: "mt-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600" }, "Clear Image")));
};
function Home() {
    var _this = this;
    var _a = react_1.useState(""), prompt = _a[0], setPrompt = _a[1];
    var _b = react_1.useState(""), imageUrl = _b[0], setImageUrl = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var API_URL = "/api/generate-image"; // You can change this if needed
    var handleGenerateImage = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Generating Image");
                    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY);
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch(API_URL, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ prompt: prompt })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    setImageUrl(data.imageUrl);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error generating image:", error_1);
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "flex flex-col items-center min-h-screen bg-gray-100 p-4" },
        React.createElement("div", { className: "flex flex-col items-center w-full max-w-md" },
            React.createElement("h1", { className: "text-4xl font-bold mb-2" }, "AI Image Generator"),
            React.createElement("p", { className: "text-lg text-gray-700 mb-4" }, "Type a prompt and generate an AI image!"),
            React.createElement("input", { type: "text", placeholder: "Enter your prompt here...", value: prompt, onChange: function (e) { return setPrompt(e.target.value); }, className: "w-full p-3 border border-gray-300 rounded-lg mb-4" }),
            React.createElement("button", { onClick: handleGenerateImage, className: "w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200" }, isLoading ? "Loading..." : "Generate Image")),
        imageUrl && (React.createElement(ImageCard, { action: function () { return setImageUrl(""); }, imageUrl: imageUrl, prompt: prompt }))));
}
exports["default"] = Home;
