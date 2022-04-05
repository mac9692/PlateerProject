package com.plateer.employee.service;

import com.plateer.employee.mapper.BoardMapper;
import com.plateer.employee.vo.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{

    private final BoardMapper boardMapper;

    @Override
    public List<Board> getBoardList(String startNumber, String countNumber) {
        return boardMapper.getBoardList(startNumber, countNumber);
    }

    @Override
    public Board viewBoard(String boardId) {
        return boardMapper.viewBoard(boardId);
    }

    @Transactional(rollbackFor = Exception.class)
    @Override
    public int insertBoard(String writer, String title, String content) {
        return boardMapper.insertBoard(writer, title, content);
    }

    @Override
    public int updateBoard(Board board) {
        //TODO validation if fail -> 예외("message")
        return boardMapper.updateBoard(board);
    }

    @Override
    public int deleteBoard(String boardId) {
        return boardMapper.deleteBoard(boardId);
    }

    @Override
    public int countBoardList() {
        return boardMapper.countBoardList();
    }


}
