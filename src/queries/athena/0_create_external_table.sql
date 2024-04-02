CREATE EXTERNAL TABLE `__ATHENA_OVERTURE_RELEASE` (
  `id` string,
  `geometry` binary,
  `bbox` struct<xmin:float,xmax:float,ymin:float,ymax:float>,
  `admin_level` int,
  `is_maritime` boolean,
  `geopol_display` string,
  `version` int,
  `update_time` string,
  `sources` array<struct<property:string,dataset:string,record_id:string,confidence:double>>,
  `subtype` string,
  `locality_type` string,
  `wikidata` string,
  `context_id` string,
  `population` int,
  `iso_country_code_alpha_2` string,
  `iso_sub_country_code` string,
  `default_language` string,
  `driving_side` string,
  `names` struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>,
  `locality_id` string,
  `class` string,
  `elevation` int,
  `source_tags` map<string,string>,
  `surface` string,
  `is_salt` boolean,
  `is_intermittent` boolean,
  `level` int,
  `has_parts` boolean,
  `height` double,
  `num_floors` int,
  `facade_color` string,
  `facade_material` string,
  `roof_material` string,
  `roof_shape` string,
  `roof_direction` double,
  `roof_orientation` string,
  `roof_color` string,
  `eave_height` double,
  `min_height` double,
  `building_id` string,
  `categories` struct<main:string,alternate:array<string>>,
  `confidence` double,
  `websites` array<string>,
  `socials` array<string>,
  `emails` array<string>,
  `phones` array<string>,
  `brand` struct<wikidata:string,names:struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,value:string,at:array<double>,side:string>>>>,
  `addresses` array<struct<freeform:string,locality:string,postcode:string,region:string,country:string>>,
  `connector_ids` array<string>,
  `road` string)
PARTITIONED BY (
  `theme` string,
  `type` string)
STORED AS PARQUET
LOCATION
  's3://overturemaps-us-west-2/release/__OVERTURE_RELEASE'
