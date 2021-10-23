<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'home')]

    #[Route('/{react_routes}', name: 'react_routes', requirements: ["react_routes" => "^(?!.*_wdt|_profiler|api|_error|2fa*).+"], defaults: ['react_routes' => null])]
    public function index(): Response
    {
        return $this->render('index/index.html.twig');
    }
}
