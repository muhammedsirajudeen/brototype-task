import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, JwtFromRequestFunction } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import User from '../../model/User';
// import keys from './config/keys'; // Your secret or public key

// Define options for JWT strategy
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() as JwtFromRequestFunction,
  secretOrKey: "muhammedsirajudeen",
};

// Create JWT strategy
passport.use(
  new JwtStrategy(options, async (jwtPayload, done) => {
    try {
      // Find the user specified in the token
      const user = await User.findById(jwtPayload.id);
      if (user) {
        // If user exists, pass user to `req.user`
        done(null, user);
      } else {
        // If user does not exist, return `false`
        done(null, false);
      }
    } catch (error) {
      done(error, false);
    }
  })
);

// Initialize passport
passport.initialize();
