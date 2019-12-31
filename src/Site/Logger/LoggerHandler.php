<?php
/**
 * @file
 * Handler for Monolog logging
 */

namespace CL\Site\Logger;

use CL\Site\Site;

use Monolog\Handler\AbstractProcessingHandler;
use Monolog\Logger;

/**
 * Handler for Monolog logging
 */
class LoggerHandler extends AbstractProcessingHandler {

    public function __construct(Site $site, $level = Logger::DEBUG, $bubble = true) {
        parent::__construct($level, $bubble);

        $this->site = $site;
    }

    /**
     * Writes the record down to the log of the implementing handler
     */
    protected function write(array $record): void {
        // TODO: Implement write() method.
        // print_r($record);

        $logger = new LoggerTable($this->site->db);
        $logger->write($record);
    }

    private $site;
}