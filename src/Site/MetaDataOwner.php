<?php
/**
 * @file
 * Interface for classes that use meta-data (MetaData class)
 */

namespace CL\Site;

/**
 * Interface for classes that use meta-data (MetaData class)
 *
 * Provides a write function to saving the meta-data to the table.
 */
interface MetaDataOwner {
    /**
     * Write meta-data to table
     * @param Site $site The Site object so we can write the database.
     */
    function writeMetaData(Site $site);
}