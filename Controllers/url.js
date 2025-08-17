const shortid = require("shortid");
const URL = require("../Models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  const ShortID = shortid();
  await URL.create({
    shortId: ShortID,
    redirectedURL: body.url,
    visitHistory: [],
  });

  res.render('home', {
    id: ShortID,
  })
  // return res.json({ id: ShortID });
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
 
  res.redirect(entry.redirectedURL);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handleGenerateNewShortURL,handleRedirect, handleGetAnalytics };
