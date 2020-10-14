--drop table if exists
DROP TABLE IF EXISTS supertable;

--merge the genre tables into one supertable
SELECT datetime, players, twitchviewers, genre
INTO supertable
FROM
(
    SELECT datetime, players, twitchviewers, genre FROM merged_fps
    UNION ALL
    SELECT datetime, players, twitchviewers, genre FROM merged_platformer
	UNION ALL
    SELECT datetime, players, twitchviewers, genre FROM merged_rpg
	UNION ALL
    SELECT datetime, players, twitchviewers, genre FROM merged_sports
	UNION ALL
    SELECT datetime ,players, twitchviewers, genre FROM merged_strategy
) t;

--for examine purposes
SELECT * FROM supertable ORDER BY datetime, genre;
