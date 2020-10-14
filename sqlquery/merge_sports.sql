--drop table if exists
DROP TABLE merged_sports;

--combine games, sum players and viewers
SELECT datetime, SUM(players) AS players, SUM(twitchviewers) AS twitchviewers
INTO merged_sports
FROM
(
    SELECT datetime, players, twitchviewers FROM assettocorsa
    UNION ALL
    SELECT datetime, players, twitchviewers FROM beatsaber
	UNION ALL
    SELECT datetime, players, twitchviewers FROM dirtrally
	UNION ALL
    SELECT datetime, players, twitchviewers FROM efootballpes2020
	UNION ALL
    SELECT datetime, players, twitchviewers FROM footballmanager2019
	UNION ALL
    SELECT datetime, players, twitchviewers FROM nba2k19
	UNION ALL
    SELECT datetime, players, twitchviewers FROM rocketleague
	UNION ALL
    SELECT datetime, players, twitchviewers FROM russianfishing4
	UNION ALL
    SELECT datetime, players, twitchviewers FROM steep
	UNION ALL
    SELECT datetime, players, twitchviewers FROM tekken7
) t
GROUP BY datetime;
ALTER TABLE merged_sports ADD COLUMN genre VARCHAR;
UPDATE merged_sports SET genre = 'sports' WHERE genre is NULL;

--for examine purposes
SELECT * FROM merged_sports ORDER BY datetime;
