"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ImageCard = function (_a) {
    var image = _a.image;
    return (react_1["default"].createElement("div", { className: "border rounded-lg overflow-hidden shadow" },
        react_1["default"].createElement("img", { src: image.download_url, alt: image.author, className: "w-full h-48 object-cover" }),
        react_1["default"].createElement("div", { className: "p-4" },
            react_1["default"].createElement("h3", { className: "font-semibold" },
                "Author: ",
                image.author),
            react_1["default"].createElement("p", { className: "text-sm text-gray-600" },
                "ID: ",
                image.id))));
};
exports["default"] = ImageCard;
