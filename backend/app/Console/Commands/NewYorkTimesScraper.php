<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class NewYorkTimesScraper extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrape:nyt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scraping new york times for books.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //$genre = $this->ask("What genre?");
        //$this->info("Scraping genre: $genre");
        $params = [ 'api-key' => 'Xry1vsaBS9uoy5LpuOpQfxe3LehCRQOW' ];
        $result = Http::get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json', $params)->json();
        if($result['status'] === 'OK' && isset($result['results']))
        {   
            $books = $result['results']['books'];
            foreach($books as $book)
            {
                $bookTitle = (string) Str::of($book['title'])->title();
                $authors = Str::of($book['author'])->before('et al')->explode(" and ")->toArray();
                $this->info($bookTitle." By ".implode(", " , $authors));
            }
        }
        return 0;
    }
}
