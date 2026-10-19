"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    res.send('OK');
});
router.get('/', (req, res) => {
    res.send('OK');
});
router.patch('/:id', (req, res) => {
    res.send('OK');
});
router.delete('/:id', (req, res) => {
    res.send('OK');
});
exports.default = router;
//# sourceMappingURL=todos.js.map