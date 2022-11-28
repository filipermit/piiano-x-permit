CREATE TABLE users (
    email TEXT PRIMARY KEY,
    ssn TEXT, avatar TEXT, name TEXT,
    job TEXT, title TEXT,
    description TEXT, country TEXT
);

CREATE TABLE badges (
    id SERIAL PRIMARY KEY,
    user_email TEXT REFERENCES users (email),
    label TEXT, emoji TEXT
);

INSERT INTO users VALUES (
  'ariel@piiano.com', '123-12-1111', 'ariel.jpg',
  'Ariel Shiftan', 'Co-Founder & CTO', 'Ariel Shiftan 👋',
  'Co-Founder and CTO @ Piiano.com', 'Israel');

INSERT INTO badges(user_email, label, emoji) VALUES (
  'ariel@piiano.com', 'Videography', '📹');

INSERT INTO users VALUES (
  'filip@permit.io', '123-12-2222', 'filip.jpg',
  'Filip Grebowski', 'Developer Advocate', 'Filip Grebowski 👋',
  'YouTube Creator, Engineer & Developer Advocate @ Permit.io', 'England');

INSERT INTO badges(user_email, label, emoji) 
VALUES 
    ('filip@permit.io', 'Videography', '📹'),
    ('filip@permit.io', 'Coding', '🤓'),
    ('filip@permit.io', 'Photography', '📸'),
    ('filip@permit.io', 'Fishing', '🎣'),
    ('filip@permit.io', 'Snowboarding', '🏂');