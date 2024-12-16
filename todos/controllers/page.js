// 경로가 요청되었을 때 처리해야 하는 기능
const mongoose = require("mongoose");
const Todo = require("../schemas/todo");

exports.list = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.render("todo/list", { title: "Todo List", todos: todos });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.read = async (req, res, next) => {};

exports.update = async (req, res, next) => {};

exports.remove = async (req, res, next) => {};

exports.create = async (req, res, next) => {};
