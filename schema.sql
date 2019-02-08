DROP DATABASE IF EXISTS itili_db;
CREATE DATABASE itili_db;
USE itili_db;

CREATE TABLE itilis (
    id INT NOT NULL AUTO_INCREMENT,
    brand_location VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    rating VARCHAR(255) NOT NULL,
    note VARCHAR(255),
    -- createdAt ()
    PRIMARY KEY (id)
)

-- INSERT INTO likes (brand_location, category, item, rating, note)
-- VALUES ("mall", "bridge", "tight", "good", "it was the best thing I ever ate" ), ("peanuts", "pirates", "goobers", "bad", "never again");