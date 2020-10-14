--drop table if exists
DROP TABLE merged_rpg;

--combine games, sum players and viewers
SELECT datetime, SUM(players) AS players, SUM(twitchviewers) AS twitchviewers
INTO merged_rpg
FROM
(
    SELECT datetime, players, twitchviewers FROM ark
    UNION ALL
    SELECT datetime, players, twitchviewers FROM bdo
	UNION ALL
    SELECT datetime, players, twitchviewers FROM conan
	UNION ALL
    SELECT datetime, players, twitchviewers FROM eso
	UNION ALL
    SELECT datetime, players, twitchviewers FROM ffxiv
	UNION ALL
    SELECT datetime, players, twitchviewers FROM mhw
	UNION ALL
    SELECT datetime, players, twitchviewers FROM poe
	UNION ALL
    SELECT datetime, players, twitchviewers FROM sevendtd
	UNION ALL
    SELECT datetime, players, twitchviewers FROM skyrim
	UNION ALL
    SELECT datetime, players, twitchviewers FROM witcher3
) t
GROUP BY datetime;
ALTER TABLE merged_rpg ADD COLUMN genre VARCHAR;
UPDATE merged_rpg SET genre = 'rpg' WHERE genre is NULL;

--for examine purposes
SELECT * FROM merged_rpg ORDER BY datetime;
