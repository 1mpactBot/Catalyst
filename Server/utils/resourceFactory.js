const createResourceFactory = (model) => {
  return async function (req, res) {
    try {
      const resourceDetail = req.body;
      const resource = await model.create(resourceDetail);
      res.status(201).json({
        status: "success",
        message: res.message,
        resource: resource,
      });
    } catch (err) {
      res.status(502).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};

const getAllResourceFactory = (model) => {
  return async function (req, res) {
    try {
      const resource = await model.find();
      res.status(200).json({
        status: "success",
        message: res.message,
        resource: resource,
      });
    } catch (err) {
      res.status(502).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};

const updateResourceById = (model, errObj) => {
  return async function (req, res) {
    try {
      const updatedResource = req.body;
      const resource = await model.findByIdAndUpdate(
        req.params.id,
        updatedResource,
        { new: true } //returns modified document if true
      );
      if (resource) {
        res.status(200).json({
          status: "success",
          message: "Resource updated",
          resource: resource,
        });
      } else {
        throw new Error(`${errObj} was not found.`);
      }
    } catch (err) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};

const deleteResourceById = (model, errObj) => {
  return async function (req, res) {
    try {
      const resource = await model.findByIdAndDelete(req.params.id);
      if (resource) {
        res.status(200).json({
          status: "success",
          message: "Resource deleted",
          resource: resource,
        });
      } else {
        throw new Error(`${errObj} was not found.`);
      }
    } catch (err) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};

module.exports = {
  createResourceFactory,
  getAllResourceFactory,
  updateResourceById,
  deleteResourceById,
};
