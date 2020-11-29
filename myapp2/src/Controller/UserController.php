<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;


class UserController extends AbstractController
{
    
    public function index(UserRepository $userRepository): Response
    {

        $users = $userRepository->findAll();
        
        $arrayCollection = array();

        foreach($users as $user) {
            $arrayCollection[] = array(
                'id' => $user->getId(),
                'name'=> $user->getName(),
                'address'=> $user->getName(),
                'phone'=> $user->getName(),
            );
        }

        $response = new JsonResponse([
            'data' => $arrayCollection,
            'success' => true,
            'status' => 200
        ]);
            
        return $response;
    }
}
