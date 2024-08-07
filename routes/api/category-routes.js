const router = require('express').Router();
const { Category, Product } = require('../../models');


//Tested in Insomnia!!!!!
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include associated products
  const categoryData = await Category.findAll({
    include: [{ model: Product }],
  });
  return res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find a single category by its `id`
  // be sure to include associated products
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  });
  return res.json(categoryData);
});

router.post('/', async (req, res) => {
  const categoryData = await Category.create(req.body);
  return res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  return res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(categoryData);
});

module.exports = router;
