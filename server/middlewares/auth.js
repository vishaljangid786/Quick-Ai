import { clerkClient } from "@clerk/express";

// middlewarre to check user id and has PremiumPlan
export const auth = async (req, res, next) => {
  try {
    const { userId, has } = await req.auth();

    const hasPremiumPan = has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPan && user.privateMetadata.free_usage) {
      req.free_usage = user.privateMetadata.free_usage;
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    req.plan = hasPremiumPan ? "premium" : "free";
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
