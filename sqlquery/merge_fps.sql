--drop table if exists
DROP TABLE merged_fps;

--combine games, sum players and viewers
SELECT datetime, SUM(players) AS players, SUM(twitchviewers) AS twitchviewers
INTO merged_fps
FROM
(
    SELECT datetime, players, twitchviewers FROM csgo
    UNION ALL
    SELECT datetime, players, twitchviewers FROM destiny2
	UNION ALL
    SELECT datetime, players, twitchviewers FROM fo4
	UNION ALL
    SELECT datetime, players, twitchviewers FROM gta5
	UNION ALL
    SELECT datetime, players, twitchviewers FROM pd2
	UNION ALL
    SELECT datetime, players, twitchviewers FROM pubg
	UNION ALL
    SELECT datetime, players, twitchviewers FROM r6siege
	UNION ALL
    SELECT datetime, players, twitchviewers FROM rust
	UNION ALL
    SELECT datetime, players, twitchviewers FROM tf2
	UNION ALL
    SELECT datetime, players, twitchviewers FROM warframe
) t
GROUP BY datetime;
ALTER TABLE merged_fps ADD COLUMN genre VARCHAR;
UPDATE merged_fps SET genre = 'fps' WHERE genre is NULL;

--for examine purposes
SELECT * FROM merged_fps ORDER BY datetime;
