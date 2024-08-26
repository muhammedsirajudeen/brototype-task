import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../../model/User';
import * as dotenv from 'dotenv';
dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: '/auth/google/callback',
},
async (accessToken: string, refreshToken: string, profile: any, done: any) => {
  console.log(profile)

  // Check if user already exists in our db using email
  const existingUser = await User.findOne({ email: profile.emails[0].value });
  
  if (existingUser) {
    // If user exists, return the user
    return done(null, existingUser);
  }
  console.log(profile)
  // If user does not exist, create a new user in our db
  const newUser = new User({
    // googleId: profile.id,
    // name: profile.displayName,
    email: profile.emails[0].value,
    profileImage:profile.photos[0].value,
    password:profile.id
  });
  
  await newUser.save();
  done(null, newUser);
}));



passport.serializeUser((user: any, done: any) => {
  done(null, user.id); // Save the user ID to the session
});

passport.deserializeUser(async (id: string, done: any) => {
  const user = await User.findById(id); // Fetch the user from the database
  done(null, user);
});
