--drop table if exists
DROP TABLE merged_strategy;

--combine games, sum players and viewers
SELECT datetime, SUM(players) AS players, SUM(twitchviewers) AS twitchviewers
INTO merged_strategy
FROM
(
    SELECT datetime, players, twitchviewers FROM civ6
    UNION ALL
    SELECT datetime, players, twitchviewers FROM dota2
	UNION ALL
    SELECT datetime, players, twitchviewers FROM factorio
	UNION ALL
    SELECT datetime, players, twitchviewers FROM footballmanager2020
	UNION ALL
    SELECT datetime, players, twitchviewers FROM heartsofiron
	UNION ALL
    SELECT datetime, players, twitchviewers FROM raft
	UNION ALL
    SELECT datetime, players, twitchviewers FROM rimworld
	UNION ALL
    SELECT datetime, players, twitchviewers FROM smite
	UNION ALL
    SELECT datetime, players, twitchviewers FROM totalwarwarhammer2
	UNION ALL
    SELECT datetime, players, twitchviewers FROM warthunder
) t
GROUP BY datetime;
ALTER TABLE merged_strategy ADD COLUMN genre VARCHAR;
UPDATE merged_strategy SET genre = 'strategy' WHERE genre is NULL;

--for examine purposes
SELECT * FROM merged_strategy ORDER BY datetime;
